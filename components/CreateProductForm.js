import React from 'react'

function CreateProductForm() {
  return (
    <>
    <h1 className='mb-4 text-blue-900 font-bold'>Create New Product</h1>
    <form>
        <div>
        <label>Product Name</label>
      <input placeholder='producct name'/>
        </div>
        <div>
            <label>Description</label>
            <textarea placeholder='description'></textarea>
        </div>
    </form>
    </>
  )
}

export default CreateProductForm
