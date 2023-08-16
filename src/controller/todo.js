import Todo from "../model/todo.js";

const todoController = {
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find(); // Retrieve all Todos from the database
            res.json(todos);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    createTodo: async (req, res) => {
        const { title, description } = req.body;
        try {
            const newTodo = {
                title,
                description,
            } // Create a new Todo object
            await Todo.create(newTodo); // Save the new Todo to the database
            res.status(201).json(newTodo); // Respond with the created Todo
        } catch (error) {
            res.status(400).json({ error: "Invalid data" });
        }
    },
    // getTodoById: async (req, res) => {   // Handler for GET /todos/:id route
    //     const { id } = req.params;   
    //     const { title, description } = req.body;
        
    //     const todo = TodoModal.findOne({id:id});   
    //     if (!todo) {   
    //         return res.status(404).json({ error: "Todo not found" });
    //     }
    //     res.json(todo);  
    // },

    updateTodo: async (req, res) => {
        const { id } = req.params;
        const { title, description } = req.body;
        try{
            const todo=await Todo.findByIdAndUpdate(
                {id:id, title:title, description:description},
                {new:true})

            if (!updatedTodo) {   
                return res.status(404).json({ error: "Todo not found" });
            }
            res.json(updatedTodo);
    }catch(err){
        res.status(500).json({ error: "Internal server error" });
    }
   },
   deleteTodo: async (req, res) => {
        const { id } = req.params;
        try{
            const todo=await Todo.findByIdAndDelete(id);

            if(!deleteTodo){
                return res.status(404).json({ error: "Todo not found" });
            }
            res.json(deleteTodo);
        }
        catch(err){
            res.status(500).json({ error: "Internal server error" });
        }
    }
        



    
};

export default todoController;
