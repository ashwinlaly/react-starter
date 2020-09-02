function useState(val) {
    const test = (val) => {
        return val
    }
    const setTest = (val) => {
        console.log(a, val, this.a)
        this.a = val
        a = val
        return a
    }
    return [test(), setTest]
}