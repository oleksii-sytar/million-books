const workercode = () => {
  onmessage = async e => {
    const res = await fetch('http://localhost:3000/api/books');
    const data = await res.json();

    postMessage(data);
  }
};

let code = workercode.toString();
code = code.substring(code.indexOf('{')+1, code.lastIndexOf('}'));

const blob = new Blob([code], {type: 'application/javascript'});
const worker_script = URL.createObjectURL(blob);

export default worker_script;