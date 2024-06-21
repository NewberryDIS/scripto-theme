/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return ['mira', 'tiffy'].includes(param);
}
