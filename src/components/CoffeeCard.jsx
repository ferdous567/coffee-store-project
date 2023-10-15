import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity,  taste,  details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(coff => coff._id !== _id);
                            setCoffees(remaining)
                        }
                    })

                console.log('delete confirmed')
            }
        })
    }

    return (
        <div className="">
            <div className="card card-side bg-base-100 shadow-xl h-full ">
                <figure><img className="h-[200px] w-[150px] " src={photo} alt="coffee" /></figure>
                <div className=" flex justify-between w-full">
                    <div className="ml-10 mt-5 text-left">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Details: {details}</p>
                        <p>Taste: {taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-3">
                            <button className="btn">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)}
                                className="btn bg-orange-400">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;