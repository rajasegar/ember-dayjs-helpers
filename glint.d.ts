import { HelperLike } from '@glint/template';
import dayjs from 'dayjs';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    // Display helpers
    'day-js': HelperLike<{
      Args: { Positional: []; Named: { date?: unknown; format?: string } };
      Return: string;
    }>;
    'dayjs-format': HelperLike<{
      Args: { Positional: []; Named: { date?: unknown; format?: string } };
      Return: string;
    }>;
    'dayjs-from': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: string;
    }>;
    'dayjs-from-now': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: string;
    }>;
    'dayjs-to': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: string;
    }>;
    'dayjs-to-now': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: string;
    }>;
    'dayjs-calendar': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: string;
    }>;
    'dayjs-diff': HelperLike<{
      Args: { Positional: []; Named: { from: dayjs.ConfigType; to: dayjs.ConfigType; unit?: dayjs.QUnitType | dayjs.OpUnitType } };
      Return: number;
    }>;
    'days-in-month': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: number;
    }>;
    'dayjs-date': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: number;
    }>;
    'dayjs-day-of-week': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: number;
    }>;
    'dayjs-weekday': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: number;
    }>;
    'dayjs-day-of-year': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: number;
    }>;
    'dayjs-week-of-year': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: number;
    }>;
    // Manipulate helpers
    'dayjs-add': HelperLike<{
      Args: { Positional: [params: unknown]; Named: { amount: number; unit?: dayjs.OpUnitType } };
      Return: dayjs.Dayjs;
    }>;
    'dayjs-subtract': HelperLike<{
      Args: { Positional: []; Named: { amount: number; unit?: dayjs.OpUnitType; format?: string } };
      Return: string;
    }>;
    'dayjs-start-of': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: dayjs.Dayjs;
    }>;
    'dayjs-end-of': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: dayjs.Dayjs;
    }>;
    // Query helpers
    'dayjs-is-before': HelperLike<{
      Args: { Positional: []; Named: { date: dayjs.ConfigType; unit?: dayjs.OpUnitType } };
      Return: boolean;
    }>;
    'dayjs-is-same': HelperLike<{
      Args: { Positional: []; Named: { date: dayjs.ConfigType; unit?: dayjs.OpUnitType } };
      Return: boolean;
    }>;
    'dayjs-is-after': HelperLike<{
      Args: { Positional: []; Named: { date: dayjs.ConfigType; unit?: dayjs.OpUnitType } };
      Return: boolean;
    }>;
    'dayjs-is-same-or-before': HelperLike<{
      Args: { Positional: []; Named: { date: dayjs.ConfigType; unit?: dayjs.OpUnitType } };
      Return: boolean;
    }>;
    'dayjs-is-same-or-after': HelperLike<{
      Args: { Positional: []; Named: { date: dayjs.ConfigType; unit?: dayjs.OpUnitType } };
      Return: boolean;
    }>;
    'dayjs-is-between': HelperLike<{
      Args: {
        Positional: [];
        Named: { date: dayjs.ConfigType; from: dayjs.ConfigType; to: dayjs.ConfigType; unit?: dayjs.OpUnitType | null; d?: string };
      };
      Return: boolean;
    }>;
    'dayjs-is-leap-year': HelperLike<{
      Args: { Positional: [params: unknown] };
      Return: boolean;
    }>;
    // i18n helpers
    'dayjs-weekdays': HelperLike<{
      Args: { Positional: [] };
      Return: dayjs.WeekdayNames;
    }>;
    'dayjs-weekdays-short': HelperLike<{
      Args: { Positional: [] };
      Return: dayjs.WeekdayNames;
    }>;
    'dayjs-weekdays-min': HelperLike<{
      Args: { Positional: [] };
      Return: dayjs.WeekdayNames;
    }>;
    'dayjs-months': HelperLike<{
      Args: { Positional: [] };
      Return: dayjs.MonthNames;
    }>;
    'dayjs-months-short': HelperLike<{
      Args: { Positional: [] };
      Return: dayjs.MonthNames;
    }>;
  }
}
