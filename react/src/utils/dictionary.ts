export const dictionary = {
	completed: 'הושלם',
	pending: 'ממתין',
	rejected: 'נדחה',
	buy: 'קנייה',
	sell: 'מכירה',
	deposit: 'הפקדה',
	withdrawal: 'משיכה',
};

export const findInDictionary = (key: string): string => {
	return dictionary[ key ] || key;
};