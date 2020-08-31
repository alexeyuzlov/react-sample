export enum Modifier {
    Neutral,
    Good,
    Bad,
}

export interface IRecord {
    id: number;
    date: Date;
    sum: number;
    title: string;
    desc?: string;
    modifier?: Modifier;
}

export interface IDay {
    id: number;
    date: Date;
    items: IRecord[];
    modifier?: Modifier;
}

let id: number = 1;

export function groupByDays(records: IRecord[]): IDay[] {
    const days: IDay[] = [];

    records.forEach((r: IRecord) => {
        let exist: IDay | null = findExistDay(days, r.date);
        if (exist) {
            exist.items.push(r);
        } else {
            days.push({
                id: ++id,
                date: r.date,
                items: [r],
            });
        }
    });

    return days;
}

function findExistDay(days: IDay[], date: Date): IDay | null {
    return days.find((d) => sameDay(d.date, date)) || null;
}

function sameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}
