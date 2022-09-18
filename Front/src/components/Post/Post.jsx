import react, { useEffect, useState, useContext } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { Button, Modal, Input } from 'react-bootstrap';
import './Post.scss';
import axios from 'axios';
import PostImage from '../assets/images/big/img6.jpg'
import Donation from '../Donation/Donation';
import SessionContext from '../session/SessionContext';
import DonationImage from '../assets/images/donation.jpeg'

const Post = () => {
	const {
		session: { user: { id, role } }
	} = useContext(SessionContext);

	const [post, setPost] = useState(
		{
			post: [],
			postData: {
				PostId: '',
				title: '',
				description: '',
				summary: '',
				imageUrl: ''
			},
			addPostModal: false,
			editPostModal: false
		});
	const setState = (nextState) => {
		setPost((prevState) => ({
			...prevState,
			...nextState,
		}));
	};

	const request = async () => {
		await axios.get(`http://localhost:8000/posts`).then((response) => {
			// console.log(response.data);
			setState({ post: response.data });
			// console.log('these are the posts',post);
			// setPost(response.data.data);
			// console.log(post.post);
			// console.log(post)
			// if (response.data) {
			// 	if (typeof response.data[1] === 'object') { setPost(response.data); console.log(post) }
			// 	else { setPost([response.data.data]); }
			// 	// console.log(response.data.data);
			// }
		});
	};
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const userInfoChecker=()=>{
	// 	axios.get(`http://localhost:8000/users/${id}`).then((response) => {
	// 		const info=response.data
	// 		// console.log(response)
	// 		if (response.data) {
	// 			if (typeof info[1] === 'object') { setUser(info); console.log(user) }
	// 			else { setUser([info]); }
	// 			console.log(info);
	// 		}
	// 	});
	// 	if(info.firstName ==='default'||info.middleName==="default"||info.lastName==="default"||info.phoneNumber==="default" ){}

	// }
	const deletePost = async id => {
		await axios.delete(`http://localhost:8000/posts/${id}`).then((response) => {
			//console.log(response)

		});;;
		console.log(id);
		alert("post deleted successfully")
		await request();
	};
	const handleChange = (e) => {
		let { name, value } = e.target;
		// setState({ [name]: value });
		setState({ postData: { [name]: value } });

	};
	//   const addpost = async () => {
	// 	  const reqBody=post.postData
	// 	const response = await axios.post('http://localhost:8000/posts',
	// 	 {
	// 		'title':'hello',
	// 		'description':'sdfjdasf',
	// 		'summary':'summary'
	// 	});
	// // setState({ articleId: responsearticle });
	// }

	const handlupdate = (event) => {
		let value = event.target.value;
		let name = event.target.name;

		setstate((prevalue) => {
			return {
				...prevalue, // Spread Operator
				[name]: value,
			};
		});
	};
	const [state, setstate] = useState({
		title: "",
		description: "",
		summary: "",

	});
	const addpost = async () => {
		handleClose()
		try {
			let { success } = await axios.post(`http://localhost:8000/posts`, {
				//   'title':post.postData.title,
				//   'description':post.postData.description,
				//   'summary':post.postData.summary
				...state
			});
			if (success) {
				console.log("ok");
				request();
			}
		} catch (error) { }
	};

	const DonateNow = (postId) => {
		console.log(postId)
		// const history=useHistory();
		// history.push('/',{params:postId})

		// console.log(firstName)
	}

	useEffect(() => {
		request();
		console.log('this is the description', post.postData.description)
		// console.log('postId',post.id)
	}, [state])

	const posts = post.post.map(post => {
		if (post.id % 2 !== 0) {
			return (
				<article className="postcard dark red" id={post.id} key={post.id}>
					<a className="postcard__img_link" href="#">
						<img className="postcard__img" src={post.imageUrl} />
					</a>
					<div className="postcard__text">
						<h1 className="postcard__title red"><a >{post.title}</a></h1>
						<div className="postcard__subtitle small">
							<time dateTime={post.createdAt}>
								<i className="fas fa-calendar-alt mr-2"></i>{post.createdAt}
							</time>
						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt">{post.description}</div>
						{role !== 'admin' && <ul class="postcard__tagbox">
							{/* <li class="tag__item"><i class="fas fa-clock mr-2"></i>Read more</li> */}
							<Link to={`donation/${post.id}`} >
								<li className="tag__item play red">
									<a onClick={() => { DonateNow(post.id) }}><i className="fas fa-play mr-2"></i>Donate</a>
								</li>
							</Link>
						</ul>}
						{role === 'admin' && <div className="postcard__tagbox">
							<Button variant="secondary" style={{ "backgroundColor": "rgb(239 239 239)", "border-radius": "5px", "color": " #117a8b", "margin-right": "10px" }} >edit</Button>
							<Button variant="secondary" style={{ "backgroundColor": "#bf2727", "color": "white", "padding": "2px" }} onClick={() => { deletePost(post.id) }}>delete</Button>


						</div>}
					</div>
				</article>)
		} else {
			return (
				<article className="postcard dark red" id={post.id} key={post.id}>
					<a className="postcard__img_link" >
						<img className="postcard__img" src={post.imageUrl} />
					</a>
					<div className="postcard__text">
						<h1 className="postcard__title red"><a >{post.title}</a></h1>
						<div className="postcard__subtitle small">
							<time dateTime={post.createdAt}>
								<i className="fas fa-calendar-alt mr-2"></i>{post.createdAt}
							</time>
						</div>
						<div className="postcard__bar"></div>
						<div className="postcard__preview-txt">{post.description}</div>
						{role !== 'admin' && <ul class="postcard__tagbox">
							{/* <li class="tag__item"><i class="fas fa-clock mr-2"></i>Read more</li> */}
							<Link to={`donation/${post.id}`}  >
								<li className="tag__item play red">
									<a onClick={() => { DonateNow(post.id) }}><i className="fas fa-play mr-2"></i>Donate</a>
								</li>
							</Link>
						</ul>}
						{role === 'admin' && <div class="postcard__tagbox">
							<Button variant="secondary" style={{ "backgroundColor": "rgb(239 239 239)", "border-radius": "5px", "color": " #117a8b", "margin-right": "10px" }} >edit</Button>
							<Button variant="secondary" style={{ "backgroundColor": "#bf2727", "color": "white", "padding": "2px" }} onClick={() => { deletePost(post.id) }}>delete</Button>


						</div>}
					</div>
				</article>
			)
		}
	})

	return (
		<>
			{post.id === undefined &&
				<section className="dark">
					<div className="container py-4">
						{role !== 'admin' && <h1 className="h1 text-center" id="pageHeaderTitle">Our Posts</h1>}
						{role === 'admin' && <Link to='posts'><Button onClick={handleShow} id='addPost'  >Add post</Button></Link>}

						{posts}
						<div className="Postpagination-wrap">
							<nav aria-label="Page navigation example">
								<ul className="pagination">
									<li className="page-item"><a className="page-link" href="#">Previous</a></li>
									<li className="page-item"><a className="page-link" href="#">1</a></li>
									<li className="page-item"><a className="page-link" href="#">2</a></li>
									<li className="page-item"><a className="page-link" href="#">3</a></li>
									<li className="page-item"><a className="page-link" href="#">Next</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</section>

			}




			<div className="model_box" style={{ 'backgroundColor': "green" }}>
				<Modal
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Add post</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={addpost}>
							<div className="form-group pt-3"> <label className='modalLabel' for="message">Post title</label> <input name="title" onChange={handlupdate} value={state.title} className="form-control" required></input> </div>
							<div className="form-group pt-3"> <label className='modalLabel' for="message">description</label> <textarea onChange={handlupdate} type='text' name="description" value={state.description} className="form-control" required></textarea> </div>

							<div className="form-group pt-3"> <label className='modalLabel' for="message">summary</label> <textarea onChange={handlupdate} name="summary" value={state.summary} className="form-control" required></textarea> </div>
							<div id='uploadContainer' >
								<div className="form-group pt-3"><button className='modalLabel' style={{ 'background-color': '#cbcbcc', 'width': 'fit-content', 'border-radius': '5px' }}>upload image</button> </div>
								<div className='uploadimage' ><img src={DonationImage} /> </div>
							</div>
							{/* <div class="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5 ButtonsContainer">
                <button class="btn btn-default"> Cancel </button>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"> Submit </button>
            </div> */}
						</form>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" style={{ "backgroundColor": "white", "color": "black" }} type="submit" onClick={addpost}>
							create
						</Button>
						<Button variant="secondary" style={{ "backgroundColor": "#bf2727", "color": "white" }} onClick={handleClose}>
							Close
						</Button>

					</Modal.Footer>
				</Modal>

				{/* Model Box Finsihs */}
			</div>
		</>
	)
}
export default Post;

