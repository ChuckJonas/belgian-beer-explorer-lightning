
type $A = any //should be typed
declare var $A: $A;

interface Component{
    get: <T>(key: string) => T
    set: (key: string, value: Object) => any
}

interface Event{
    getParam: <T>(name: string) => T
}