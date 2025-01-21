export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h2><label htmlFor="wd-name">Assignment Name</label></h2>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected>Precentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected>Online</option>
                        </select> <br />
                        Online Entry Options <br />
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label> <br />
                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label> <br />
                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label> <br />
                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label> <br />
                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        Assign
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label> <br />
                        <input placeholder="Everyone" id="wd-assign-to" /> <br /> <br />
                        Due <br />
                        <input type="date" defaultValue="2024-05-13" id="wd-due-date" /> <br /> <br />
                        <table>
                            <tr>
                                <td>Available from</td>
                                <td>Until</td>
                            </tr>
                            <tr>
                                <td><input type="date" defaultValue="2024-05-06" id="wd-available-from" /></td>
                                <td><input type="date" defaultValue="2024-05-20" id="wd-available-until" /></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <button>Cancel</button>
            <button>Save</button>
            
        </div>
    );
}

