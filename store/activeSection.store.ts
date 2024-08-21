const  state = reactive({
    activeSection: null as string | null

});

const getters = {
    get_active_section: () => state.activeSection,
};

const mutations = {
    set_active_section: (activeSection:string | null) => {
        state.activeSection = activeSection;
    },
};

export default {
    ...getters,
    ...mutations,
};