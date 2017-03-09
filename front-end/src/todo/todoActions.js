/**
 * Created by patrickcunha on 09/03/17.
 */
const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGE',
    payload: event.target.value
});

export default changeDescription;