
import {ModelBase} from '../models/model.base'

export class Post extends ModelBase
{
  userId:number;
  title:string;
  body:string;
}