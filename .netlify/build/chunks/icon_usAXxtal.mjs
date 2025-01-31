const icon = new Proxy({"src":"/_astro/icon.BJD5tiNw.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/projects/bsscontracting/src/images/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as i };
