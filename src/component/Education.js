import React from 'react';

const Education = () => {
	return (
		<div className='content'>
			<div className='card' style={{ color: '#000000' }}>
				<h1>Education</h1>
				{/* <hr /> */}
				<div className='content-abt'>
					<p>
						<h2 style={{ margin: '20px auto 20px auto ', width: '100%' }}>
							<span>Higher Education</span>
						</h2>

						<div style={{ margin: '0px 10px 0px', paddingBottom:'30px' }}>
							<table width='100%' border='1px solid green' padding='0'>
								<tr>
									<th>INSTITUTION</th>
									<th>YEAR</th>
									<th>AWARD</th>
								</tr>
								<tr>
									<td>Makerere University</td>
									<td>2010 - 2014</td>
									<td>Honours Bachelors degree in Software Engineering</td>
								</tr>
							</table>
							<h2 style={{ margin: '20px auto 20px auto ', width: '100%' }}>
								<span>Certificate</span>
							</h2>
							<table width='100%' border='1px solid green'>
								<tr>
									<th>COMPANY</th>
									<th>YEAR</th>
									<th>AWARD</th>
								</tr>
								<tr>
									<td>Japan International Cooperation Agency </td>
									<td>September - November, 2018</td>
									<td><a target="_blank" style={{color:"blue"}} href='https://drive.google.com/file/d/1z7s9BdZuszp65VfgjrTD13EL3BxWSD6z/view?usp=sharing'>Winner, JICA Challenge</a></td>
								</tr>
								<tr>
									<td>Cousera</td>
									<td>28 - 10 - 2021</td>
									<td><a target="_blank" style={{color:"blue"}} href='https://drive.google.com/file/d/1s6ValuWrtuA66LUWnVp9rAbWF3QBYqkJ/view?usp=sharing'>C++ Course Certificate</a></td>
								</tr>
								<tr>
									<td>Google Developers</td>
									<td>12-02-2021</td>
									<td><a target="_blank" style={{color:"blue"}} href='https://drive.google.com/file/d/1y-psNZPSgVSQ8PwEcmT-4JQXbZChQcc5/view?usp=sharing'>Certificate of participation</a></td>
								</tr>

								<tr>
									<td>WomenInFinTech</td>
									<td>12-18, September, 2020</td>
									<td><a target="_blank" style={{color:"blue"}} href='https://drive.google.com/file/d/1OP__dc1ccpX_8s2pGLgLSZUDhjkd3hZm/view?usp=sharing'>Certificate of participation</a></td>
								</tr>
								<tr>
									<td>Tunga</td>
									<td>July - December, 2019</td>
									<td><a target="_blank" style={{color:"blue"}} href='https://drive.google.com/file/d/1dtPALrZ2e-Nm6RD9BrLuAlLPtx6DWav4/view?usp=sharing'>Certificate of achievement</a></td>
								</tr>
								<tr>
									<td>Andela Uganda Limited</td>
									<td>September - November, 2018</td>
									<td><a target="_blank" style={{color:"blue"}} href='https://drive.google.com/file/d/1BXeKNKBce_Qu9L2v87h_ign6qMDNKKOW/view?usp=sharing'>Certificate of participation</a></td>
								</tr>

							</table>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Education;
