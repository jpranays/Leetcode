/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	s = s.split("");
	t = t.split("");
	return t.find(
		(letter) =>
			!s.includes(letter) ||
			s.filter((sletter) => sletter == letter).length !=
				t.filter((tletter) => tletter == letter).length
	);
};
