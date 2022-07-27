import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc
} from 'firebase/firestore'

import type { IUsersRepository } from './IUserRepository.types'

import { IUserModel } from '@modules/Users/models/IUserModel'

import app from '@shared/database'

const db = getFirestore(app)

class UsersRepository implements IUsersRepository {
  create: IUsersRepository['create'] = async data => {
    const docRef = await addDoc(collection(db, 'users'), data)

    const createdUser = await this.findById(docRef.id)

    return createdUser
  }

  update: IUsersRepository['update'] = async data => {
    const docRef = doc(db, 'users', data.id)

    await updateDoc(docRef, data)

    const updatedUser = await this.findById(data.id)

    return updatedUser
  }

  delete: IUsersRepository['delete'] = async id => {
    const docRef = doc(db, 'users', id)

    await deleteDoc(docRef)
  }

  findAll: IUsersRepository['findAll'] = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'))

    const allUsers = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as IUserModel[]

    return allUsers
  }

  findById: IUsersRepository['findById'] = async id => {
    const querySnapshot = await getDocs(collection(db, 'users'))

    const foundUser = querySnapshot.docs
      .find(doc => doc.id === id)
      .data() as IUserModel

    return { ...foundUser, id }
  }

  findByEmail: IUsersRepository['findByEmail'] = async email => {
    const querySnapshot = await getDocs(collection(db, 'users'))

    const foundUser = querySnapshot.docs
      .find(doc => doc.data().email === email)
      .data() as IUserModel

    return foundUser
  }
}

export { UsersRepository }
