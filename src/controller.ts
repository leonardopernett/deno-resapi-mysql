import {pool} from './dataabse.ts'


export const getAllUser = async (ctx:any)=>{
    const user = await pool.execute('SELECT * FROM user')
    ctx.response.body = user.rows
}

export const getOneUser = async (ctx:any)=>{
  const {id} = ctx.params 
  const user:any = await pool.execute('select * from user where id=?',[id])
  if(user.rows.length == 0) {
    return ctx.response.body= {message:'user not found'}
  }else{
    return ctx.response.body= user.rows
  }
  
}

export const deleteUser = async (ctx:any)=>{
  const {id} = ctx.params
  await pool.execute('delete from user where id=?',[id]) 
  ctx.response.body={
    message:'user deleted'
  }
}

export const updateUser = async (ctx:any)=>{
 try {
  const {id}= ctx.params
  const {name, country}  = await ctx.request.body().value
  const response={name,country}
  await pool.execute('update user set name=? , country=? where id=?',[name, country, id])
   ctx.response.body={message:'user updated'}
 } catch (error) {
    console.log(error)
 }
}

export const createUser = async(ctx:any)=>{
  const user = await ctx.request.body().value
  if(user.hasOwnProperty('name') && user.hasOwnProperty('country')){
      await pool.execute('insert into user(name,country) values(?,?)',[user.name,user.country])
      ctx.response.body = {
          message:'user created'
      }
  }else{
    ctx.response.body = {
      message:'not field exist'
  }
  }
  
}