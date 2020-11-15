const express = require('express');
const cors = require('cors');

const app = express();
const Marksheet = require('./Model/marksheetModel');

//implementing CORS
//Access-control-Allow-Origin(Allowing Everyone to use our API)
app.use(cors());
app.options('*', cors());

//body parse middleware
app.use(express.json({ limit: '10kb' }));

app.get('/api/getAll',async (req,res)=>{     
  try{
    const doc = await Marksheet.find();
    return res.status(200).json({
        status: 'success',
        result: doc.length,
        data: {doc}
    })
  }  
  catch(err){
    return   res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }

})

app.get('/api/getOne',async (req,res)=>{
      try{
            let doc= await Marksheet.findById(req.params.id)
            if(!doc) return res.status(404).json({
              status: 'fail',
              message: "Could not found record with id "+req.params.id
            });
            
            res.status(200).json({
                status: 'success',
                data: {doc}
            })
      }  
      catch(err){
        return   res.status(500).json({
          status: 'fail',
          message: err.message
        });
      }
});

app.post('/api/calculate', async function (req,res) {
  try{
    const subjects =  req.body.subjects;
    if(subjects != null || !Array.isArray(subjects) || subjects.length ===0){
      return   res.status(500).json({
        status: 'fail',
        message:"Please Provide All Required fields"
      });
    }
    if(subjects.Any(x=> !x.name || !x.obtainedMarks && x.name == null || x.obtainedMarks == null )){
      return   res.status(500).json({
        status: 'fail',
        message:"Please Provide All Required fields"
      });
    }
    let totalMarks = 0;
    let minMarks = subjects[0].obtainedMarks;
    let maxMarks = subjects[0].obtainedMarks;
    let minSubject = subjects[0].name;
    let maxSubject = subjects[0].name;
    subjects.map((subject,i)=>{
      totalMarks += subject.obtainedMarks;
      if (min > subjects[i].obtainedMarks)
      {
          minMarks = subjects[i].obtainedMarks;
          minSubject = subjects[i].name;
      }

      if (max < subjects[i].obtainedMarks)
      {
        maxMarks = subjects[i].obtainedMarks;
        maxSubject = subjects[i].name;
      }
     })
   
     let percentage = (totalMarks / (subjects.length * 100)) * 100;

     let marksheetModel = new MarksheetModel();
     marksheetModel.totalMarks= totalMarks;
     marksheetModel.subjects = percentage;
     marksheetModel.minMarks = minMarks;
     marksheetModel.minSubject = minSubject;
     marksheetModel.maxMarks = maxMarks;
     marksheetModel.maxSubject = maxSubject;
    
    const doc = await Marksheet.create(marksheetModel);
        return res.status(201).json({
            status:"success",
            data:{ 
               doc
            }
        })
    
  }
  catch(err){
    return   res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
 
 });