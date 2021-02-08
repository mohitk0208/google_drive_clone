import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updateEmail, updatePassword } = useAuth();

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("passwords do not match");
		}

		setError("");
		setLoading("");
		const promises = [];

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}

		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push("/");
			})
			.catch(() => {
				setError("Failed to update profile.");
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mt-4">Update Profile</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								ref={emailRef}
								defaultValue={currentUser.email}
								required
							/>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordRef}
								placeholder="leave black if want the same"
							/>
						</Form.Group>
						<Form.Group id="passwod-confirm">
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmRef}
								placeholder="leave black if want the same"
							/>
						</Form.Group>
						<Button disabled={loading} className="w-100" type="submit">
							Update
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				<Link to="/">Cancel</Link>
			</div>
		</>
	);
}
