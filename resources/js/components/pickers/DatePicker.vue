<template>
  <v-menu
    :close-on-content-click="false"
    :readonly="readonly"
    min-width="auto"
    offset-y
    ref="menu1"
    transition="scale-transition"
    v-model="datePicker"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :clearable="clearable"
        :hide-details="hideDetails"
        :label="label"
        :readonly="readonly"
        :value="$utils.getDate(selected)"
        color="primary lighten-1"
        :outlined="outlined"
        prepend-inner-icon="mdi-calendar"
        v-on="on"
        :dark="filterMap"
        :disabled="disabled"
        @click:clear="clear"
        :dense="dense"
        class="subtitle-2"
      />
    </template>
    <v-date-picker
      :first-day-of-week="1"
      :readonly="readonly"
      @input="datePicker = false"
      color="primary lighten-1"
      header-color="primary lighten-1"
      locale="fr-BE"
      no-title
      v-model="selected"
    />
  </v-menu>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    dense: {
      default: false,
    },
    value: {
      default: null,
    },
    label: {
      default: "Date",
    },
    readonly: {
      default: false,
    },
    clearable: {
      default: true,
    },
    outlined: {
      default: true,
    },
    fillHeight: {
      default: true,
    },
    hideDetails: {
      default: false,
    },
    filterMap: {
      default: false,
    },
    disabled: {
      default: false,
    },
  },
  data() {
    return {
      datePicker: null,
      date: null,
    };
  },
  watch: {
    date() {
      this.value = this.$utils.getDate(this.date);
    },
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    clear() {
      this.$emit("clear");
    },
  },
};
</script>

