import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditItem from "./EditItem";
import {
	Routes,
	Route,
	useNavigate
} from "react-router-dom";

function PostLists(props) {
	return <h1>Hello, {props.name}</h1>;
  }
function PostLists1(props) {
	console.log(props.name,'prop')
	const [data, setData] = useState(null);
	let navigate = useNavigate();

	function getDate() {
		axios.get('http://localhost/practice/apilogin/public/api/post')
			.then(function (response) {
				setData(response.data)
			})
	}

	useEffect(() => {
		getDate();
	}, []);

	function EditHandler(e) {
		navigate("/edit/" + e);
	}
	function DeleteHandler(e) {
		console.log(e)
		axios.delete('http://localhost/practice/apilogin/public/api/post/' + e)
			.then(function (response) {
				getDate();
			})
			.catch(function (error) {
				console.log(error.errors);
			})
	}

	return (
		
		<Fragment>
			<Link to="/add-item"> <Button variant="outlined">Add</Button></Link>
			<div>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Id</TableCell>
								<TableCell align="right">Title</TableCell>
								<TableCell align="right">Time</TableCell>
								<TableCell align="right">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data && data.map(singleData =>
								<TableRow key={singleData.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component="th" scope="row">{singleData.id}</TableCell>
									<TableCell align="right"><Link to={`/item/${singleData.id}`}> <p>{singleData.title}</p> </Link></TableCell>
									<TableCell align="right">{moment(singleData.created_at).fromNow()}</TableCell>
									<TableCell align="right">
										<Stack>
											<Button data-id={singleData.id} onClick={() => DeleteHandler(singleData.id)} variant="outlined">Delete</Button>
											<Routes >
												<Route path="/edit:id" data={singleData} element={<EditItem />} />
											</Routes>
											<Button data-id={singleData.id} onClick={() => EditHandler(singleData.id)} variant="outlined">Edit</Button>
										</Stack>
									</TableCell>
								</TableRow>
							)};
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</Fragment>
	);
};

export default PostLists;
