// @flow

export type Contact = {
  id: number,
  name: string
}

export type State = {
  contacts: Contact[]
}

const initialState: State = {
  contacts: []
}

const UPDATE = "contact/UPDATE"
const DELETE = "contact/DELETE"

export type Action =
  | { type: "contact/UPDATE", contact: Contact }
  | { type: "contact/DELETE", id: number }

export default function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case UPDATE:
      return {
        ...state,
        contacts: updateContact(state.contacts, action.contact)
      }

    case DELETE:
      return {
        ...state,
        contacts: deleteContact(state.contacts, action.id)
      }

    default:
      return state
  }
}

function updateContact(contacts: Contact[], contact: Contact) {
  return [ ...contacts.filter(c => c.id !== contact.id), contact ]
}

function deleteContact(contacts: Contact[], id: number) {
  return contacts.filter(c => c.id !== id)
}
