export type SetEntry = {
  set: number;
  reps: number | string;
  load: number | string; // lbs, or "BW" or "RPE 8"
  rest: string; // "2:00"
  note?: string;
};

export type Exercise = {
  name: string;
  slug: string;
  category: 'Squat' | 'Press' | 'Pull' | 'Hinge' | 'Accessory' | 'Conditioning';
  sets: SetEntry[];
  cue?: string;
};

export type Workout = {
  slug: string;
  title: string;
  day: string;
  focus: string;
  durationMin: number;
  rpe: number;
  exercises: Exercise[];
};

export const sampleWorkout: Workout = {
  slug: 'lower-heavy',
  title: 'Lower / Heavy',
  day: 'Monday — Week 4',
  focus: 'Back squat top set + posterior chain',
  durationMin: 62,
  rpe: 8,
  exercises: [
    {
      name: 'Back Squat',
      slug: 'back-squat',
      category: 'Squat',
      cue: 'Brace, break at the hips, drive the floor away.',
      sets: [
        { set: 1, reps: 5, load: 135, rest: '1:30', note: 'Warm-up' },
        { set: 2, reps: 5, load: 185, rest: '2:00', note: 'Warm-up' },
        { set: 3, reps: 3, load: 225, rest: '2:30' },
        { set: 4, reps: 3, load: 275, rest: '3:00' },
        { set: 5, reps: 1, load: 315, rest: '3:30', note: 'Top single — PR attempt' },
      ],
    },
    {
      name: 'Romanian Deadlift',
      slug: 'rdl',
      category: 'Hinge',
      cue: 'Soft knees, push hips back, keep bar close.',
      sets: [
        { set: 1, reps: 8, load: 185, rest: '2:00' },
        { set: 2, reps: 8, load: 205, rest: '2:00' },
        { set: 3, reps: 8, load: 225, rest: '2:00' },
        { set: 4, reps: 8, load: 225, rest: '2:00' },
      ],
    },
    {
      name: 'Bulgarian Split Squat',
      slug: 'bss',
      category: 'Accessory',
      cue: 'Front-foot torque, ribs down, knee tracks toes.',
      sets: [
        { set: 1, reps: '10 ea', load: '2x40', rest: '1:30' },
        { set: 2, reps: '10 ea', load: '2x40', rest: '1:30' },
        { set: 3, reps: '10 ea', load: '2x40', rest: '1:30' },
      ],
    },
    {
      name: 'Standing Calf Raise',
      slug: 'calf-raise',
      category: 'Accessory',
      sets: [
        { set: 1, reps: 15, load: 135, rest: '1:00' },
        { set: 2, reps: 15, load: 135, rest: '1:00' },
        { set: 3, reps: 15, load: 135, rest: '1:00' },
      ],
    },
    {
      name: 'Hanging Leg Raise',
      slug: 'hlr',
      category: 'Accessory',
      sets: [
        { set: 1, reps: 12, load: 'BW', rest: '1:00' },
        { set: 2, reps: 12, load: 'BW', rest: '1:00' },
        { set: 3, reps: 10, load: 'BW', rest: '1:00' },
      ],
    },
  ],
};

export type WeekDay = {
  day: string;
  label: string;
  type: 'Lift' | 'Rest' | 'Conditioning' | 'Mobility';
  title: string;
  bigLift?: string;
};

export const week: WeekDay[] = [
  { day: 'Mon', label: 'Day 1', type: 'Lift', title: 'Lower / Heavy', bigLift: 'Back Squat — 315 x 1' },
  { day: 'Tue', label: 'Day 2', type: 'Lift', title: 'Upper / Press', bigLift: 'Bench Press — 245 x 3' },
  { day: 'Wed', label: 'Day 3', type: 'Conditioning', title: 'Aerobic Z2 — 40m' },
  { day: 'Thu', label: 'Day 4', type: 'Lift', title: 'Lower / Volume', bigLift: 'Deadlift — 365 x 5' },
  { day: 'Fri', label: 'Day 5', type: 'Lift', title: 'Upper / Pull', bigLift: 'Pendlay Row — 205 x 5' },
  { day: 'Sat', label: 'Day 6', type: 'Mobility', title: 'Mobility + Carries' },
  { day: 'Sun', label: 'Day 7', type: 'Rest', title: 'Rest' },
];

export type PR = {
  lift: string;
  weight: number; // lbs
  reps: number;
  date: string; // ISO
  e1rm: number;
};

export const prs: PR[] = [
  { lift: 'Back Squat',    weight: 315, reps: 1, date: '2026-05-12', e1rm: 315 },
  { lift: 'Deadlift',      weight: 405, reps: 1, date: '2026-04-28', e1rm: 405 },
  { lift: 'Bench Press',   weight: 245, reps: 3, date: '2026-05-05', e1rm: 267 },
  { lift: 'Overhead Press', weight: 155, reps: 5, date: '2026-04-19', e1rm: 179 },
  { lift: 'Pendlay Row',   weight: 225, reps: 3, date: '2026-04-30', e1rm: 245 },
  { lift: 'Front Squat',   weight: 255, reps: 3, date: '2026-04-22', e1rm: 278 },
  { lift: 'Weighted Chin-Up', weight: 90, reps: 5, date: '2026-05-09', e1rm: 105 },
  { lift: 'Power Clean',   weight: 215, reps: 1, date: '2026-04-15', e1rm: 215 },
];

export type Program = {
  slug: string;
  name: string;
  tagline: string;
  weeks: number;
  daysPerWeek: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  goal: 'Strength' | 'Hypertrophy' | 'Powerbuilding' | 'Peaking' | 'GPP';
  description: string;
  mainLifts: string[];
};

export const programs: Program[] = [
  {
    slug: 'foundation-5',
    name: 'Foundation 5',
    tagline: 'The first twelve weeks under the bar.',
    weeks: 12,
    daysPerWeek: 3,
    level: 'Beginner',
    goal: 'Strength',
    description: 'Linear progression on the big three. Add 5 lb every session until the wheels come off — then you wave.',
    mainLifts: ['Squat', 'Bench Press', 'Deadlift'],
  },
  {
    slug: 'concrete-block',
    name: 'Concrete Block',
    tagline: 'Eight weeks. Two waves. One heavier you.',
    weeks: 8,
    daysPerWeek: 4,
    level: 'Intermediate',
    goal: 'Strength',
    description: 'Top-set / back-off structure with planned RPE caps. Built for lifters who already know what 80% feels like.',
    mainLifts: ['Squat', 'Bench', 'Deadlift', 'OHP'],
  },
  {
    slug: 'rebar',
    name: 'Rebar',
    tagline: 'Powerbuilding — strength scaffolding, size on top.',
    weeks: 10,
    daysPerWeek: 4,
    level: 'Intermediate',
    goal: 'Powerbuilding',
    description: 'Heavy primary lifts paired with high-volume hypertrophy work. Bigger arms, bigger numbers.',
    mainLifts: ['Squat', 'Bench', 'Row', 'OHP'],
  },
  {
    slug: 'top-set',
    name: 'Top Set',
    tagline: 'A meet-prep peaking block.',
    weeks: 6,
    daysPerWeek: 4,
    level: 'Advanced',
    goal: 'Peaking',
    description: 'Six weeks out — pyramid up to a planned 1RM attempt. Specificity dialed in, accessories trimmed.',
    mainLifts: ['Squat', 'Bench', 'Deadlift'],
  },
  {
    slug: 'volume-stack',
    name: 'Volume Stack',
    tagline: 'Hypertrophy block — pack mass on the frame.',
    weeks: 8,
    daysPerWeek: 5,
    level: 'Intermediate',
    goal: 'Hypertrophy',
    description: 'Upper / lower / pull split with progressive set counts. RIR-based loading keeps you out of the ditch.',
    mainLifts: ['Squat', 'Bench', 'Row', 'RDL'],
  },
  {
    slug: 'general-prep',
    name: 'General Prep',
    tagline: 'Strength + conditioning for actual humans.',
    weeks: 12,
    daysPerWeek: 3,
    level: 'Beginner',
    goal: 'GPP',
    description: 'Three lifts, two conditioning days. Built for lifters with kids, jobs, and a hard cap on time in the gym.',
    mainLifts: ['Squat', 'Press', 'Deadlift'],
  },
];
