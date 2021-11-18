<script>
import { Doughnut } from "vue-chartjs";
export default {
    mixins: [Doughnut],
    props: ["data", "options"],
    mounted() {
        this.renderChart(this.data, {
            borderWidth: "5px",
            hoverBackgroundColor: "red",
            hoverBorderWidth: "5px",
        });
    },
};
</script>

