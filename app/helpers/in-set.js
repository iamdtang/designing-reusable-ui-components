import { helper } from '@ember/component/helper';

export function inSet(params/*, hash*/) {
  let [ set, item ] = params;
  return set.has(item);
}

export default helper(inSet);
