import * as firebase from 'firebase'

export default {
    setApikey(apikey) {
        let userid = firebase.auth().currentUser.uid;
        let path = "/users/" + userid + "/apikey";
        firebase.database().ref(path).set(apikey);
    },
    deleteApikey() {
        let userid = firebase.auth().currentUser.uid;
        let path = "/users/" + userid + "/apikey";
        firebase.database().ref(path).remove();
    }
}