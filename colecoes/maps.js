const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const users = new Map();

users.set ('Joel Reis', 'ADMIN');
users.set ('Mônica Borba', 'USER');
users.set ('Thalys Leite', 'ADMIN');
users.set ('Victor Ulisses', 'ADMIN');
users.set ('André Lima', 'USER');
users.set ('Arthur Bandeira', 'USER');
users.set ('Raymundo Dayan', 'USER');
users.set ('Julio Cesar', 'USER');

console.log(getAdmins(users));