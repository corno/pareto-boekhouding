export namespace a_ {

    export type my_type = number

    export namespace b {

        export type my_type = string

        export type type_ref = my_type
    }
}

export type a_ = string
// export type a = string

const x: a_.b.type_ref = "asdf"

export { a_ as a }