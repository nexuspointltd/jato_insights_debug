<template>
    <main>
        <jato-plugin
            class="jato-plugin"
            ref="jatoPlugin"
            :data="vehicle.insights"
        />
    </main>
</template>


<script>
    export default {
        name: 'IndexPage',
        data() {
            return {
                vehicle: {
                    //  use provided local dummy data for now TODO @jato_guys dummy data in docs contains duplicate keys in `Transmission` data
                    insights: {
                        input: {
                            make: 'Requested Make',
                            model: 'Requested Model',
                            countryCode: 'GB',
                        },
                        Model: {
                            callout: {
                                label: 'Top Selling Last 6 Months',
                                context: 'Trim',
                                popularity: 'Top 1',
                                timeFrame: '6 Month',
                            },
                            insight: [
                                {
                                    value: 'Trim Name',
                                    uptake: null,
                                },
                            ],
                        },
                        Colour: {
                            callout: {
                                label: 'Top 3 Selling Last 6 Months',
                                context: 'Colour',
                                popularity: 'Top 3',
                                timeFrame: '6 Month',
                            },
                            insight: [
                                {
                                    value: 'Colour Name 1',
                                    uptake: 49.75,
                                },
                                {
                                    value: 'Colour Name 2',
                                    uptake: 34.75,
                                },
                                {
                                    value: 'Colour Name 3',
                                    uptake: 14.75,
                                },
                            ],
                        },
                        Transmission: {
                            callout: {
                                label: 'Top Selling Last 6 Months',
                                context: 'Transmission',
                                popularity: 'Top 1',
                                timeFrame: '6 Month',
                            },
                            insight: [
                                {
                                    value: 'Transmission Name',
                                    uptake: 49.75,
                                },
                            ],
                        },
                        'Fuel Type': {
                            callout: {
                                label: 'Top Selling Last 6 Months',
                                context: 'Fuel Type',
                                popularity: 'Top 1',
                                timeFrame: '6 Month',
                            },
                            insight: [
                                {
                                    value: 'Fuel Type Name',
                                    uptake: 49.75,
                                },
                            ],
                        },
                        'Body Type': {
                            callout: {
                                label: 'Top Selling Last 6 Months',
                                context: 'Body Type',
                                popularity: 'Top 1',
                                timeFrame: '6 Month',
                            },
                            insight: [
                                {
                                    value: 'Body Style Name',
                                    uptake: 49.75,
                                },
                            ],
                        },
                        Option: {
                            callout: {
                                label: 'Top 3 Selling Last 6 Months',
                                context: 'Option',
                                popularity: 'Top 3',
                                timeFrame: '6 Month',
                            },
                            insight: [
                                {
                                    value: 'Option Name 1',
                                    uptake: null,
                                },
                                {
                                    value: 'Option Name 2',
                                    uptake: null,
                                },
                                {
                                    value: 'Option Name 3',
                                    uptake: null,
                                },
                            ],
                        },
                    }
                },
            }
        },
        mounted() {
            if (process.client) {
                // Access the jato-plugin element after it's mounted
                const jatoPlugin = this.$refs.jatoPlugin;

                if (jatoPlugin) {
                    console.log("Element found");
                    
                    // Simulate data fetch after 1 second
                    setTimeout(() => {
                        // Inject data into the JATO Web Plugin
                        jatoPlugin.data = [this.vehicle.insights];
                    }, 1000);
                } else {
                    console.error('jato-plugin element not found');
                }
            }
        },
        methods: {
        }
    }
</script>
