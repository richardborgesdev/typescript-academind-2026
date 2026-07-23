function process(val: unknown) {
  if (typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log();
  }
}
