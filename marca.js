/*
 * Language: Marca
 * Author: Stefano D'Angelo <zanga.mail@gmail.com>
 * Description: Minimal extensible markup language
 */

module.exports = function(hljs) {
	var rules = {
		contains: [
			// tag begin
			{
				className:	'tag',
				begin:		/{\s*/,
				end:		':',
				contains: [
					// tag name
					{
						className:	'name',
						begin:		/([\w\-]+)/
					},
					// attributes
					{
						endsWithParent:	true,
						contains: [
							{
								className:	'attr',
								begin:		/([\w\-]+)/
							},
							{
								begin:		'=',
								contains: [
									{
										className:	'string',
										begin:		'"',
										end:		'"',
										contains: [
											{
												begin:	/([^"\\]|\\"|\\\\)+/
											}
										]
									}

								]
							}
						]
					}
				]
			},
			// tag end
			{
				className:	'tag',
				begin:		'}'
			},
			// text
			{
				begin:		/([^\{\}\\]|\\\{|\\\}|\\\\)+/
			},
		]
	};
	return rules;
}
