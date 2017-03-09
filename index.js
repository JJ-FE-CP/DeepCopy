/**
 * Created by Joe on 2017/3/9.
 */
function Parent() {}
function Child() {}

//属性拷贝
function extend(Child,Parent) {
    var p = Parent.prototype
    var c = Child.prototype
    for(var i in p){
        c[i] = p [i]
    }
    c.uber.p
    return c
}

//浅拷贝
function extend_copy(p){
    var c = {}
    for(var i in p ){
        c[i] = p[i]
    }
    c.uber = p
    return c
}

//深拷贝

function deep_copy(p,c){
    c = c || {}
    for(var i in p ){
        if(p.hasOwnProperty(i)){
            if(typeof p[i] === 'object'){
                c[i] = Array.isArray(p[i])?[]:{}
                deep_copy(p[i],c[i])
            }else{
                c[i] = p[i]
            }
        }
    }
    return c
}

//深浅拷贝区别在于新对象属性指针是否指向原对象的堆；