const workercode = () => {
  onmessage = async e => {
    const res = await fetch('/api/books');

    postMessage(res);
  }
};

let code = workercode.toString();
code = code.substring(code.indexOf('{')+1, code.lastIndexOf('}'));

const blob = new Blob([code], {type: 'application/javascript'});
const worker_script = URL.createObjectURL(blob);

export default worker_script;