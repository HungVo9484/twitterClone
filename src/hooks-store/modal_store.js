import { initStore } from './store';

const configureStore = () => {
    const actions = { SHOW_MODAL: (curState, modal) => ({modalStore: modal})}

    initStore(actions, {modalStore: {
        show: false,
        modalContent: null
    }
    })
}
 
export default configureStore;