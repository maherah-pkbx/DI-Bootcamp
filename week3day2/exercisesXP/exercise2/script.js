// Part 1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}.`);

// Part 2
myWatchedSeries.splice(myWatchedSeries.indexOf('the big bang theory'), 1, 'Friends');
myWatchedSeries.push('Ozark');
myWatchedSeries.unshift('test');
myWatchedSeries.splice(myWatchedSeries.indexOf('black mirror'), 1);
console.log(myWatchedSeries[myWatchedSeries.indexOf('money heist')][2])
console.log(myWatchedSeries);