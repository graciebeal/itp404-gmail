import { helper } from '@ember/component/helper';

export function truncateText(params, length) {
  if (!params[0]) {
  	return params[0];
  } else {
  	console.log(params);
  	return params[0].substring(0, 10, params[1] + '...');
  }

}

export default helper(truncateText);
