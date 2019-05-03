import Component from '@ember/component';

export default Component.extend({
	starred: false,

	actions: {

		star(newValue) {
			// this.toggleProperty('starred');
			// this.onClick(!this.starred);
			this.set('starred', !this.starred);

			// console.log(!this.starred);
		}
	}
});
