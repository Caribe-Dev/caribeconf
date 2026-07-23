import { speakers } from './constants'

const UNCONFIRMED = 'Por confirmar'

const findSpeaker = (id: string) => speakers.find((s) => s.id === id)

const isUnconfirmed = (talk?: string) => !talk || /por confirmar/i.test(talk)

/** A talk/session defined by the speaker `id` it belongs to (see constants `speakers`). */
type RawSession = {
  /** must match `id` in constants `speakers` */
  id?: string
  /** fallback title for sessions without a speaker in constants */
  title?: string
}

type RawItem =
  | { type: 'break'; title: string; time: string; note?: string }
  | ({ type: 'talk'; time?: string; note?: string } & RawSession)
  | { type: 'parallel'; time?: string; label?: string; note?: string; sessions: RawSession[] }

type RawDay = { id: string; label: string; date: string; items: RawItem[] }

export type ResolvedSession = {
  title: string
  speaker?: string
  role?: string
  thumbnail?: string
  /** time slot, from the speaker's `schedule` in constants */
  schedule?: string
}

export type AgendaBreak = { type: 'break'; title: string; time: string; note?: string }
export type AgendaTalk = ResolvedSession & { type: 'talk'; time: string; note?: string }
export type AgendaParallel = {
  type: 'parallel'
  time: string
  label?: string
  note?: string
  sessions: ResolvedSession[]
}

export type AgendaItem = AgendaBreak | AgendaTalk | AgendaParallel

export type AgendaDay = { id: string; label: string; date: string; items: AgendaItem[] }

const resolveSession = ({ id, title }: RawSession): ResolvedSession => {
  const found = id ? findSpeaker(id) : undefined

  return {
    speaker: found?.name,
    role: found?.role?.trim(),
    thumbnail: found?.thumbnail,
    schedule: found?.schedule?.trim() || undefined,
    title: title ?? (found ? (isUnconfirmed(found.talk) ? 'Charla por confirmar' : found.talk) : 'Charla por confirmar'),
  }
}

const resolveItem = (item: RawItem): AgendaItem => {
  if (item.type === 'break') return item

  if (item.type === 'parallel') {
    const sessions = item.sessions.map(resolveSession)
    return {
      type: 'parallel',
      label: item.label,
      note: item.note,
      time: item.time ?? sessions[0]?.schedule ?? '',
      sessions,
    }
  }

  const { type, time, note, ...session } = item
  const resolved = resolveSession(session)

  return {
    type,
    time: time ?? resolved.schedule ?? '',
    note: note ?? (resolved.title === 'Charla por confirmar' ? UNCONFIRMED : undefined),
    ...resolved,
  }
}

const rawAgenda: RawDay[] = [
  {
    id: 'dia-1',
    label: 'Día 1',
    date: '14 Ago',
    items: [
      { type: 'break', title: 'Bienvenida', time: '9:00 – 9:20' },
      { type: 'talk', id: 'nathalia-gonzalez' },
      { type: 'talk', id: 'oscar-barajas' },
      { type: 'talk', id: 'harold-combita' },
      { type: 'talk', id: 'andrea-monsalve' },
      { type: 'talk', id: 'zuleima-de-la-rosa' },
      { type: 'talk', id: 'julian-luna' },
      { type: 'break', title: 'Snack', time: '12:00 – 14:00', note: 'Snack incluido · almuerzo no incluido' },
      {
        type: 'parallel',
        label: 'Talleres · simultáneos',
        note: 'Cada asistente debe traer su laptop',
        sessions: [{ id: 'maicol-ruidiaz' }, { id: 'geovanny-mendoza' }],
      },
      {
        type: 'parallel',
        label: 'Talleres · simultáneos',
        note: 'Cada asistente debe traer su laptop',
        sessions: [{ id: 'sandy-atencio' }, { id: 'dario-guzman' }],
      },
      { type: 'break', title: 'Cierre de la jornada', time: '17:30' },
    ],
  },
  {
    id: 'dia-2',
    label: 'Día 2',
    date: '15 Ago',
    items: [
      { type: 'break', title: 'Bienvenida', time: '8:00 – 9:00' },
      { type: 'talk', id: 'erasmo-hernandez' },
      { type: 'talk', id: 'mariam-villa' },
      { type: 'break', title: 'Snack', time: '9:50 – 10:20' },
      { type: 'talk', id: 'renzo-tincopa' },
      { type: 'talk', id: 'gisell-ulloa' },
      { type: 'talk', id: 'rina-plata' },
      { type: 'break', title: 'Almuerzo', time: '12:00 – 13:30', note: 'No incluido' },
      { type: 'talk', id: 'mateo-robayo' },
      { type: 'talk', id: 'eduardo-alvarez' },
      { type: 'talk', id: 'santiago-carrillo' },
      { type: 'talk', id: 'luis-araujo' },
      { type: 'talk', id: 'luis-delascar' },
      { type: 'talk', id: 'rob-rimola' },
      { type: 'talk', title: 'Panel de Empresarios', time: '16:50 – 17:20', note: '' },
      { type: 'break', title: 'Clausura', time: '17:20' },
    ],
  },
]

export const agenda: AgendaDay[] = rawAgenda.map((day) => ({
  ...day,
  items: day.items.map(resolveItem),
}))
