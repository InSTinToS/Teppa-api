"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const firestore_1 = require("firebase/firestore");
const database_1 = __importDefault(require("@shared/database"));
const db = (0, firestore_1.getFirestore)(database_1.default);
class UsersRepository {
    constructor() {
        this.create = async (data) => {
            const docRef = await (0, firestore_1.addDoc)((0, firestore_1.collection)(db, 'users'), data);
            const createdUser = await this.findById(docRef.id);
            return createdUser;
        };
        this.update = async (data) => {
            const docRef = (0, firestore_1.doc)(db, 'users', data.id);
            await (0, firestore_1.updateDoc)(docRef, data);
            const updatedUser = await this.findById(data.id);
            return updatedUser;
        };
        this.delete = async (id) => {
            const docRef = (0, firestore_1.doc)(db, 'users', id);
            await (0, firestore_1.deleteDoc)(docRef);
        };
        this.findAll = async () => {
            const querySnapshot = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, 'users'));
            const allUsers = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return allUsers;
        };
        this.findById = async (id) => {
            const querySnapshot = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, 'users'));
            const foundUser = querySnapshot.docs.find(doc => doc.id === id);
            return foundUser
                ? { ...foundUser.data(), id: foundUser.id }
                : undefined;
        };
        this.findByEmail = async (email) => {
            const querySnapshot = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, 'users'));
            const foundUser = querySnapshot.docs.find(doc => doc.data().email === email);
            return foundUser
                ? { ...foundUser.data(), id: foundUser.id }
                : undefined;
        };
    }
}
exports.UsersRepository = UsersRepository;
