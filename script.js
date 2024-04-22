function generateAssignment() {
    const rollNumber = document.getElementById('rollNumber').value;

    if (!rollNumber || isNaN(rollNumber)) {
        alert('Please enter a valid roll number.');
        return;
    }

    const rollNo = parseInt(rollNumber);

    let assignment;

    if (rollNo >= 1 && rollNo <= 50) {
        // Determine the assignment based on the roll number range and parity
        if (rollNo >= 1 && rollNo <= 10) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Array Creation and Basic Operations

                In this problem, you are tasked with writing a Python function that takes two lists of integers as input and performs a series of basic array operations using the NumPy library. 
                The function should create NumPy arrays from the input lists, ensure they are of equal size, and then calculate the element-wise sum, difference, product, and quotient of the arrays. 
                The results of these operations should be returned in a dictionary.
                
                Function Requirements:
                
                - Function Name: 'create_and_operate'
                - Input Parameters: Two lists of integers ('list1' and 'list2').
                - Output: A dictionary with the results of the element-wise operations or an error message if the input lists are not of equal size.
                
                Detailed Explanation:
                
                1. Array Conversion: The input lists should be converted into NumPy arrays. NumPy arrays allow for efficient element-wise operations and are a fundamental part of numerical computing in Python.
                
                2. Size Validation: Before performing any operations, the function must check if the two arrays are of equal size. This is crucial because element-wise operations require arrays of the same dimensions.
                
                3. Element-wise Operations: The function should perform the following operations:
                   - Sum: Add corresponding elements from both arrays.
                   - Difference: Subtract elements of the second array from the first.
                   - Product: Multiply corresponding elements from both arrays.
                   - Quotient: Divide elements of the first array by the corresponding elements of the second array, resulting in a floating-point array.
                
                4. Result Storage: The results of these operations should be stored in a dictionary with keys corresponding to the operation names ('sum', 'difference', 'product', 'quotient').
                
                5. Error Handling: If the input lists are not of equal size, the function should return an error message indicating the issue.
                
                Sample Input:
                
                list1 = [2, 4, 6, 8]
                list2 = [1, 3, 5, 7]
                
                
                Sample Output:
                
                {
                  'sum': array([ 3,  7, 11, 15]),
                  'difference': array([ 1,  1,  1,  1]),
                  'product': array([ 2, 12, 30, 56]),
                  'quotient': array([2.        , 1.33333333, 1.2       , 1.14285714])
                }
                </pre>
                ` :
                `<pre>
                Problem Statement: Calculate Statistics from a Dataset in CSV

                In this task, you are required to write a Python function named 'calculate_statistics' that performs statistical analysis on a dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains a single column of numeric data, and compute various statistical measures including the mean, median, variance, standard deviation, minimum, and maximum values.
                
                Detailed Steps:
                
                1. Read Data from CSV: The function should start by reading a column of numbers from a CSV file. This can be achieved using libraries like 'pandas' or 'numpy'.
                
                2. Data Conversion: Convert the data from the CSV file into a NumPy array to facilitate efficient numerical operations.
                
                3. Statistical Calculations:
                   - Mean: Calculate the average of the dataset.
                   - Median: Determine the middle value of the dataset.
                   - Variance: Compute the average of the squared differences from the Mean.
                   - Standard Deviation: Calculate the square root of the variance.
                   - Minimum: Find the smallest number in the dataset.
                   - Maximum: Find the largest number in the dataset.
                
                Use NumPy's built-in functions like np.mean, np.median, np.var, np.std, np.min, and np.max to perform the calculations.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each statistical measure.
                
                
                Sample CSV File Content:
                
                data
                1
                2
                3
                4
                5
                6
                7
                8
                9
                10
                
                
                Sample Output:
                
                {
                    'mean': 5.5,
                    'median': 5.5,
                    'variance': 9.166666666666666,
                    'standard_deviation': 3.0276503540974917,
                    'min': 1,
                    'max': 10
                }
                </pre>
                `;
        } else if (rollNo >= 11 && rollNo <= 20) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Analyze Weather Data from a CSV File

                Write a Python function named 'analyze_weather_data' that performs data analysis on a weather dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains columns for daily maximum and minimum temperatures, and compute the average daily temperature, the highest temperature, 
                and the lowest temperature recorded in the dataset.
                
                Function Requirements:
                
                - Function Name: 'analyze_weather_data'
                - Input Parameter: A string representing the file path of the CSV file ('csv_filepath').
                - Output: A dictionary with the results of the analysis including the average daily temperature, highest temperature, and lowest temperature.
                
                Detailed Explanation:
                
                1. Read Data from CSV: The function should start by reading the CSV file which contains columns for daily maximum and minimum temperatures.
                
                2. Data Conversion: Convert the relevant columns from the CSV file into NumPy arrays to facilitate efficient numerical operations.
                
                3. Data Analysis:
                   - Average Daily Temperature: Calculate the average of the maximum and minimum temperatures for each day to get the daily average temperature.
                   - Highest Temperature: Determine the highest temperature recorded in the dataset.
                   - Lowest Temperature: Determine the lowest temperature recorded in the dataset.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each analysis metric ('average_daily_temperature', 'highest_temperature', 'lowest_temperature').
                
                Sample CSV File Content:
                
                Day,MaxTemp,MinTemp
                1,88,59
                2,69,63
                3,77,55
                4,99,44
                5,81,57
                
                
                Sample Output:
                
                
                {
                    'average_daily_temperature': [73.5, 71.0, 66.0, 77.0, 69.0],
                    'highest_temperature': 99,
                    'lowest_temperature': 44
                }
                
                </pre>` :
                `<pre>
                Problem Statement: Analyze Nutritional Information from a CSV File

                Write a Python function named 'analyze_nutrition_data' that performs data analysis on a nutritional dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains columns for various nutritional components like 
                calories, protein, fat, and carbohydrates per serving of different food items. 
                The function will compute the average, minimum, and maximum values for each nutritional component.
                
                Function Requirements:
                
                - Function Name: 'analyze_nutrition_data'
                - Input Parameter: A string representing the file path of the CSV file ('csv_filepath').
                - Output: A dictionary with the results of the analysis for each nutritional component, including average, minimum, and maximum values.
                
                Detailed Explanation:
                
                1. Read Data from CSV: The function should start by reading the CSV file which contains columns for calories, protein, fat, and carbohydrates.
                
                2. Data Conversion: Convert the relevant columns from the CSV file into NumPy arrays to facilitate efficient numerical operations.
                
                3. Nutritional Analysis:
                   - Average: Calculate the average value for each nutritional component.
                   - Minimum: Determine the minimum value recorded for each component.
                   - Maximum: Determine the maximum value recorded for each component.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each nutritional component and sub-keys for 'average', 'min', and 'max'.
                
                Sample CSV File Content:
                
                Food,Calories,Protein,Fat,Carbohydrates
                Apple,95,0.5,0.3,25
                Banana,105,1.3,0.4,27
                Chicken Breast,165,31,3.6,0
                
                Sample Output:
                
                {
                    'Calories': {'average': 121.67, 'min': 95, 'max': 165},
                    'Protein': {'average': 11.27, 'min': 0.5, 'max': 31},
                    'Fat': {'average': 1.43, 'min': 0.3, 'max': 3.6},
                    'Carbohydrates': {'average': 17.33, 'min': 0, 'max': 27}
                }
                            
                </pre>` ;
        } else if (rollNo >= 21 && rollNo <= 30) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Student Performance Analysis System

                Write a Python function named 'analyze_student_performance' that performs data analysis on a student performance dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains columns for student names, their roll numbers, and scores in various subjects. 
                The function will compute the average score, highest score, and lowest score for each subject.
                
                Function Requirements:
                
                - Function Name: 'analyze_student_performance'
                - Input Parameter: A string representing the file path of the CSV file ('csv_filepath').
                - Output: A dictionary with the results of the analysis for each subject, including average, highest, and lowest scores.
                
                Detailed Explanation:
                
                1. Read Data from CSV: The function should start by reading the CSV file which contains columns for student names, roll numbers, and scores in subjects like Mathematics, Science, and English.
                
                2. Data Conversion: Convert the scores from the CSV file into NumPy arrays to facilitate efficient numerical operations.
                
                3. Score Analysis:
                   - Average Score: Calculate the average score for each subject.
                   - Highest Score: Determine the highest score recorded for each subject.
                   - Lowest Score: Determine the lowest score recorded for each subject.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each subject and sub-keys for 'average', 'highest', and 'lowest'.
                
                Sample CSV File Content:
                
                Name,Roll Number,Mathematics,Science,English
                John Doe,001,78,82,74
                Jane Smith,002,88,90,85
                Alice Johnson,003,92,88,91
                Bob Brown,004,85,84,88
                
                Sample Output:
                
                {
                    'Mathematics': {'average': 85.75, 'highest': 92, 'lowest': 78},
                    'Science': {'average': 86.0, 'highest': 90, 'lowest': 82},
                    'English': {'average': 84.5, 'highest': 91, 'lowest': 74}
                }
                
                
                </pre>`:
                `<pre>
                Problem Statement: Employee Management System Analysis

                Develop a Python function named 'analyze_employee_data' that performs data analysis on an employee dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains columns for employee names, departments, and monthly salaries. 
                The function will compute the average salary, highest salary, and lowest salary for each department.
                
                Function Requirements:
                
                - Function Name: 'analyze_employee_data'
                - Input Parameter: A string representing the file path of the CSV file ('csv_filepath').
                - Output: A dictionary with the results of the analysis for each department, including average salary, highest salary, and lowest salary.
                
                Detailed Explanation:
                
                1. Read Data from CSV: The function should start by reading the CSV file which contains columns for employee names, departments, and monthly salaries.
                
                2. Data Conversion: Convert the salary data from the CSV file into NumPy arrays to facilitate efficient numerical operations.
                
                3. Salary Analysis:
                   - Average Salary: Calculate the average salary for each department.
                   - Highest Salary: Determine the highest salary recorded for each department.
                   - Lowest Salary: Determine the lowest salary recorded for each department.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each department and sub-keys for 'average_salary', 'highest_salary', and 'lowest_salary'.
                
                Sample CSV File Content:
                
                Employee,Department,Salary
                John Doe,Accounting,50000
                Jane Smith,IT,65000
                Alice Johnson,Accounting,45000
                Bob Brown,IT,70000
                Charlie Davis,Marketing,48000
                Ella Adams,Marketing,66000
                
                
                Sample Output:
                
                {
                    'Accounting': {'average_salary': 47500, 'highest_salary': 50000, 'lowest_salary': 45000},
                    'IT': {'average_salary': 67500, 'highest_salary': 70000, 'lowest_salary': 65000},
                    'Marketing': {'average_salary': 57000, 'highest_salary': 66000, 'lowest_salary': 48000}
                }
                                
                </pre>`;
        } else if (rollNo >= 31 && rollNo <= 40) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Library Management System - Book Checkout Analysis

                Develop a Python function named 'analyze_book_checkout' that performs data analysis on a library management dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains columns for book IDs, titles, authors, checkout dates, and return dates. 
                The function will compute the total number of checkouts per book, the average checkout duration for each book, and identify the most frequently checked-out book.
                
                Function Requirements:
                
                - Function Name: 'analyze_book_checkout'
                - Input Parameter: A string representing the file path of the CSV file ('csv_filepath').
                - Output: A dictionary with the results of the analysis for each book, including total checkouts, average checkout duration, and the most frequently checked-out book.
                
                
                
                Detailed Explanation:
                
                1. Read Data from CSV: The function should start by reading the CSV file which contains columns for book IDs, titles, authors, checkout dates, and return dates.
                
                2. Data Conversion: Convert the relevant columns from the CSV file into NumPy arrays to facilitate efficient numerical operations.
                
                3. Checkout Analysis:
                   - Total Checkouts: Calculate the total number of times each book has been checked out.
                   - Average Checkout Duration: Determine the average duration between checkout and return for each book.
                   - Most Frequently Checked-Out Book: Identify the book with the highest number of checkouts.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each book and sub-keys for 'total_checkouts', 'average_duration', and a separate key for 'most_frequent_book'.
                
                Sample CSV File Content:
                
                BookID,Title,Author,CheckoutDate,ReturnDate
                001,To Kill a Mockingbird,Harper Lee,2021-01-01,2021-01-15
                002,1984,George Orwell,2021-01-02,2021-01-12
                001,To Kill a Mockingbird,Harper Lee,2021-02-01,2021-02-14
                003,The Great Gatsby,F. Scott Fitzgerald,2021-01-01,2021-01-08
                002,1984,George Orwell,2021-03-01,2021-03-12
                
                
                Sample Output:
                
                {
                    '001': {'total_checkouts': 2, 'average_duration': 14.0},
                    '002': {'total_checkouts': 2, 'average_duration': 10.5},
                    '003': {'total_checkouts': 1, 'average_duration': 7.0},
                    'most_frequent_book': '001'
                }
                
                
                </pre>` :
                `<pre>
                Problem Statement: Analyze Nutritional Information from a CSV File

                Write a Python function named 'analyze_nutrition_data' that performs data analysis on a nutritional dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains columns for various nutritional components like calories, protein, fat, and carbohydrates per serving of different food items. 
                The function will compute the average, minimum, and maximum values for each nutritional component.
                
                Function Requirements:
                
                - Function Name: 'analyze_nutrition_data'
                - Input Parameter: A string representing the file path of the CSV file ('csv_filepath').
                - Output: A dictionary with the results of the analysis for each nutritional component, including average, minimum, and maximum values.
                
                Detailed Explanation:
                
                1. Read Data from CSV: The function should start by reading the CSV file which contains columns for calories, protein, fat, and carbohydrates.
                
                2. Data Conversion: Convert the relevant columns from the CSV file into NumPy arrays to facilitate efficient numerical operations.
                
                3. Nutritional Analysis:
                   - Average: Calculate the average value for each nutritional component.
                   - Minimum: Determine the minimum value recorded for each component.
                   - Maximum: Determine the maximum value recorded for each component.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each nutritional component and sub-keys for 'average', 'min', and 'max'.
                
                Sample CSV File Content:
                
                Food,Calories,Protein,Fat,Carbohydrates
                Apple,95,0.5,0.3,25
                Banana,105,1.3,0.4,27
                Chicken Breast,165,31,3.6,0
                
                Sample Output:
                
                {
                    'Calories': {'average': 121.67, 'min': 95, 'max': 165},
                    'Protein': {'average': 11.27, 'min': 0.5, 'max': 31},
                    'Fat': {'average': 1.43, 'min': 0.3, 'max': 3.6},
                    'Carbohydrates': {'average': 17.33, 'min': 0, 'max': 27}
                }
                
                </pre>`;
        } else if (rollNo >= 41 && rollNo <= 50) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Calculate Statistics from a Dataset in CSV

                In this task, you are required to write a Python function named 'calculate_statistics' that performs statistical analysis on a dataset provided in a CSV file using NumPy. 
                The function should read the dataset from the CSV file, which contains a single column of numeric data, and compute various statistical measures including the mean, median, variance, standard deviation, minimum, and maximum values.
                
                Detailed Steps:
                
                1. Read Data from CSV: The function should start by reading a column of numbers from a CSV file. This can be achieved using libraries like 'pandas' or 'numpy'.
                
                2. Data Conversion: Convert the data from the CSV file into a NumPy array to facilitate efficient numerical operations.
                
                3. Statistical Calculations:
                   - Mean: Calculate the average of the dataset.
                   - Median: Determine the middle value of the dataset.
                   - Variance: Compute the average of the squared differences from the Mean.
                   - Standard Deviation: Calculate the square root of the variance.
                   - Minimum: Find the smallest number in the dataset.
                   - Maximum: Find the largest number in the dataset.
                
                Use NumPy's built-in functions like np.mean, np.median, np.var, np.std, np.min, and np.max to perform the calculations.
                
                4. Return Results: The results of these calculations should be returned in a dictionary with keys corresponding to each statistical measure.
                

                Sample CSV File Content:
                
                
                data
                1
                2
                3
                4
                5
                6
                7
                8
                9
                10
                
                
                Sample Output:
                
                {
                    'mean': 5.5,
                    'median': 5.5,
                    'variance': 9.166666666666666,
                    'standard_deviation': 3.0276503540974917,
                    'min': 1,
                    'max': 10
                }
                
                </pre>` :
                `<pre>
                Problem Statement: Array Creation and Basic Operations

                In this problem, you are tasked with writing a Python function that takes two lists of integers as input and performs a series of basic array operations using the NumPy library. 
                The function should create NumPy arrays from the input lists, ensure they are of equal size, and then calculate the element-wise sum, difference, product, and quotient of the arrays. 
                The results of these operations should be returned in a dictionary.
                
                Function Requirements:
                
                - Function Name: 'create_and_operate'
                - Input Parameters: Two lists of integers ('list1' and 'list2').
                - Output: A dictionary with the results of the element-wise operations or an error message if the input lists are not of equal size.
                
                Detailed Explanation:
                
                1. Array Conversion: The input lists should be converted into NumPy arrays. NumPy arrays allow for efficient element-wise operations and are a fundamental part of numerical computing in Python.
                
                2. Size Validation: Before performing any operations, the function must check if the two arrays are of equal size. This is crucial because element-wise operations require arrays of the same dimensions.
                
                3. Element-wise Operations: The function should perform the following operations:
                   - Sum: Add corresponding elements from both arrays.
                   - Difference: Subtract elements of the second array from the first.
                   - Product: Multiply corresponding elements from both arrays.
                   - Quotient: Divide elements of the first array by the corresponding elements of the second array, resulting in a floating-point array.
                
                4. Result Storage: The results of these operations should be stored in a dictionary with keys corresponding to the operation names ('sum', 'difference', 'product', 'quotient').
                
                5. Error Handling: If the input lists are not of equal size, the function should return an error message indicating the issue.
                
                Sample Input:
                
                list1 = [2, 4, 6, 8]
                list2 = [1, 3, 5, 7]
                
                
                Sample Output:
                
                {
                  'sum': array([ 3,  7, 11, 15]),
                  'difference': array([ 1,  1,  1,  1]),
                  'product': array([ 2, 12, 30, 56]),
                  'quotient': array([2.        , 1.33333333, 1.2       , 1.14285714])
                }
                </pre>
                `;
        }

        const assignmentContainer = document.getElementById('assignmentContainer');
        assignmentContainer.innerHTML = `<p>${assignment}</p>`;
    } else {
        alert('Please enter a valid roll number between 1 and 50.');
    }
}
