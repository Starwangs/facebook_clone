export function diff_minutes(dt1) {
    let diff =(parseInt(Date.now()) - dt1) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
}