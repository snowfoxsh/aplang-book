# Configure Your Development Environment

To start working on aplang projects, it is recommended to use Visual Studio Code (VS Code). Git is not strictly required, but it is highly recommended for version control.

## Step 1: Install GitHub Desktop and Git VCS

### Install GitHub Desktop

1. **Download GitHub Desktop**:
   - Go to the [GitHub Desktop website](https://desktop.github.com/).
   - Download the installer for your operating system.

2. **Install GitHub Desktop**:
   - **Windows/macOS**: Run the installer and follow the prompts to complete the installation.
   - **Linux**: See your individual distributions documentation for installation information.
   - [Git](https://git-scm.com) version control should automatically be installed by GitHub Desktop.

## Step 2: Install Visual Studio Code (VS Code)

### Install VS Code on Windows

1. **Visit the VS Code download page**: [VS Code Download](https://code.visualstudio.com/Download).

2. **Download the installer for Windows**: Click on the "Windows" download link.

3. **Run the installer**: Double-click the installer file (`VSCodeSetup-x64-<version>.exe`).

4. **Follow the on-screen installation prompts.
	- Make sure to check "Add to PATH"
	- Also check "Register code as an editor for supported file types"
	- OPTIONAL: "Add to context menu"

### Install VS Code on Linux

1. **Install VSCode with your distro's package manager**
	- If you need help, refer to the [installation documentation](https://code.visualstudio.com/docs/setup/linux)

### Install VS Code on macOS

1. **Visit the VS Code download page**: [VS Code Download](https://code.visualstudio.com/Download).

2. **Download the installer for macOS**: Click on the "macOS" download link to download a `.zip` file.

3. **Install VS Code**:
   - Open the `.zip` file to extract the contents.
   - Drag the extracted `Visual Studio Code.app` file to your "Applications" folder.

## Step 3: Set Up a Project Directory

### Create a GitHub Repository with GitHub Desktop

1. **Open GitHub Desktop**: Launch the GitHub Desktop application.

2. **Create a New Repository**:
   - Click on "File" > "New Repository."
   - Fill in the repository name and choose the local path where you want to create the repository.
	   - We recommend using the default path.
   - Click "Create Repository."

### Open the Project Directory in VS Code

#### Using GitHub Desktop:
   - In GitHub Desktop, make sure your repository is selected.
   - Click on the "Repository" menu, then select "Open in Visual Studio Code." This will open the repository in VS Code.

#### Alternative Method:
   - If the "Open in Visual Studio Code" button is not available, click on the "Show in Explorer" (Windows) or "Show in Finder" (macOS) button to open the repository folder in your file explorer.
   - Right-click the folder and select "Open with Code" (if this option is available) or open VS Code, click on "File" > "Open Folder..." and navigate to your repository directory.

### Create the `main.ap` File

1. **Open VS Code**: Launch Visual Studio Code.

2. **Create a New File**: Click on "File" > "New File" or press `Ctrl + N` (`Cmd + N` on macOS).
3. **Add Code**: Enter the following code into your file
	```ap 
   DISPLAY("Hello World!")
	```
1. **Save the File**: Click on "File" > "Save As..." or press `Ctrl + S` (`Cmd + S` on macOS). Name the file `main.ap` and save it in your project directory.
2. **(Recommended)**: Also Enable autosave from from the "File" context menu.

## Step 4: Install the VSCode Extension

1. **Find the Extension in the Visual Studio Marketplace**: It is available [here](https://marketplace.visualstudio.com/items?itemName=aplang.aplang)
   - Alternatively, search for ApLang in the "Extensions" tab in Visual Studio Code

2. **Install the Extension**: Press the install `Install` button.

## Step 4: Run the `main.ap` File with the `aplang` Binary

1. **Open Integrated Terminal in VS Code**:
   - Go to "View" > "Terminal" or press `` Ctrl + ` ``.

2. **Run the File**: In the terminal, navigate to the directory containing `main.ap` and run the file using the `aplang` binary. You should see the output `Hello World!` in your console.

## Conclusion

Congratulations! You have successfully setup an `aplang` project. You can now begin to develop more complex programs using `aplang`. You are ready to begin following along with the rest of this book.
## [Troubleshooting](installation.md)