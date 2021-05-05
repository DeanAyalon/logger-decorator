
const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;
const BENCHMARK_FLOAT_SIGNS = 5;

// TODO: use myrmidon

function processGetBenchmark(time) {
    const diff = process.hrtime(time);
    const msTime = (diff[0] * NS_PER_SEC + diff[1])  * MS_PER_NS;

    return msTime.toFixed(BENCHMARK_FLOAT_SIGNS);
}

function processStartBenchmark() {
    return process.hrtime();
}

function performanceStartBenchmark() {
    return performance.now();
}

function performanceGetBenchmark(time) {
    const diff = performance.now() - time;

    return diff.toFixed(BENCHMARK_FLOAT_SIGNS);
}

function isProcessEnv() {
    try {
        process.hrtime();

        return true;
    } catch (error) {
        return false;
    }
}

const IS_PROCESS_ENV = isProcessEnv();

export const getBenchmark = IS_PROCESS_ENV ? processGetBenchmark : performanceGetBenchmark;
export const startBenchmark = IS_PROCESS_ENV ? processStartBenchmark : performanceStartBenchmark;
