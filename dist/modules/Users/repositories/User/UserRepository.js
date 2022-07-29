"use strict";

exports.__esModule = true;
exports.UsersRepository = void 0;

var _firestore = require("firebase/firestore");

var _database = _interopRequireDefault(require("@shared/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const db = (0, _firestore.getFirestore)(_database.default);

class UsersRepository {
  constructor() {
    this.create = async data => {
      const docRef = await (0, _firestore.addDoc)((0, _firestore.collection)(db, 'users'), data);
      const createdUser = await this.findById(docRef.id);
      return createdUser;
    };

    this.update = async data => {
      const docRef = (0, _firestore.doc)(db, 'users', data.id);
      await (0, _firestore.updateDoc)(docRef, data);
      const updatedUser = await this.findById(data.id);
      return updatedUser;
    };

    this.delete = async id => {
      const docRef = (0, _firestore.doc)(db, 'users', id);
      await (0, _firestore.deleteDoc)(docRef);
    };

    this.findAll = async () => {
      const querySnapshot = await (0, _firestore.getDocs)((0, _firestore.collection)(db, 'users'));
      const allUsers = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return allUsers;
    };

    this.findById = async id => {
      const querySnapshot = await (0, _firestore.getDocs)((0, _firestore.collection)(db, 'users'));
      const foundUser = querySnapshot.docs.find(doc => doc.id === id);
      return foundUser ? { ...foundUser.data(),
        id: foundUser.id
      } : undefined;
    };

    this.findByEmail = async email => {
      const querySnapshot = await (0, _firestore.getDocs)((0, _firestore.collection)(db, 'users'));
      const foundUser = querySnapshot.docs.find(doc => doc.data().email === email);
      return foundUser ? { ...foundUser.data(),
        id: foundUser.id
      } : undefined;
    };
  }

}

exports.UsersRepository = UsersRepository;