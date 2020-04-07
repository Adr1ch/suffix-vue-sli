import Vue from 'vue';
import moment from 'moment';
import { mapGetters } from 'vuex';

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY');
  }
  return moment(new Date()).format('MM/DD/YYYY');
});

Vue.filter('toUpper', (value) => (value ? value.toUpperCase() : ''));

const mixin = {
  methods: {
    getLink(categories) {
      if (!this.getTagById) throw new Error('NOT_FOUND_METHOD');

      const result = this.getTagById(categories[0]);
      if (!result) return '';

      return result.data.name;
    },
  },
  computed: {
    ...mapGetters('blog', {
      getTagById: 'getTagById',
    }),
  },
};

export default mixin;
