class MyPromise {
  constructor(executionFn) {
    this.state = "pending";
    this.resolveFn = value => {
      if (this.state !== "pending") return;
      this.value = value;
      this.state = "fulfilled";
    };
    this.rejectFn = error => {
      if (this.state !== "pending") return;
      this.value = error;
      this.state = "rejected";
    };

    executionFn(this.resolveFn, this.rejectFn);
  }

  then(resolverFn) {
    if (this.state === "fulfilled") {
      let resolverFnResult = resolverFn(this.value);
      if (resolverFnResult instanceof MyPromise) {
        return resolverFnResult;
      }
    }
    return this;
  }

  catch(rejectedFn) {
    if (this.state === "rejected") {
      rejectedFn(this.value);
      return new MyPromise(() => {});
    }
  }
}

export { MyPromise };
