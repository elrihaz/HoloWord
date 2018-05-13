// ***genesis()*** fonction indispensable et qui permet setup et validation si nécessaire
function genesis() {
    return true
}

// ***validateCommit()*** fonction indispensable si on fait un commit() pour les regles de validations de l'ecriture sur la chaîne
function validateCommit() {
    return true
}

// ***holoTextWrite()***
function holoTextWrite(text) {
    var hash = commit('holoText', text)
    return hash
}

// ***holoTextRead()***
function holoTextRead(hash) {
    var holoText = get(hash, {
        Local: true
    })
    return holoText
}
