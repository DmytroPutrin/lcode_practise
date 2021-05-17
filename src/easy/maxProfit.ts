/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/

/* Time Limit Exceeded solution */
export function maxProfit(prices: number[]): number {
    const len = prices.length;
    let max = 0;

    prices.forEach((cost: number, index: number) => {
        let maxForRestDay = 0;

        for (let i = index + 1; i < len; i++ ) {
            const diff = prices[i] - cost;

            maxForRestDay = diff > maxForRestDay ? diff : maxForRestDay;
        }

        max = maxForRestDay > max ? maxForRestDay : max;
    });

    return max;
}

console.log(maxProfit([7,1,5,3,6,4]));

/* Better solution  */
export function maxProfit2(prices: number[]): number {
    const len = prices.length;

    if (len <= 1) {
        return 0;
    }

    let max = 0;
    let greatest = Number.MAX_VALUE;

    for (let i = 0; i < len; i++){
        if (prices[i] < greatest){
            greatest = prices[i];
        } else if (prices[i] - greatest > max) {
            max = prices[i] - greatest;
        }
    }

    return max;
}