import { Tutorial } from './models/tutorial.model';
import { User } from './models/user.model';
import { Hero } from './models/hero.model'

// export interface AppState {
//   readonly tutorial: Tutorial[];
// }

// export interface AppState {
//     readonly user: User[];
//   }

// export interface AppState {
//   readonly hero: Hero[];
// }
export interface AppState {
  readonly user: User[];
}