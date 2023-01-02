##������
~~~
import sys
reload(sys)
sys.setdefaultencoding("utf-8")
~~~
##�������
~~~
if __name__ == '__main__':
    DBToPolygon()#������
~~~
##try catch
~~~
def dbToPolygon(InDB,InPath):
    cursor,row = None,None
    dbCursor = None
    try:
                          
    except Exception as err:
        arcpy.AddError(err)
        s = sys.exc_info()
        arcpy.AddError("Error '%s' happened on line %d"%(s[1],s[2].tb_lineno))

    finally:
        if dbCursor:
            dbCursor.close()
        if cursor:
            del cursor
        if row:
            del row
~~~
##������ļ���������Զ���һ
~~~
import os
def GetNewFilePath(Workspace,name):
    filename= name
    i=0
    while os.path.exists(Workspace + "\\" + filename + ".shp"):
        i=i+1
        filename = "{}{}".format(name,i)
    return filename + ".shp"
~~~
##����arcpy
~~~
import arcpy
~~~
##��ò���ֵ
~~~
    InDB = arcpy.GetParameterAsText(0)
    InPath = arcpy.GetParameterAsText(1)
~~~
##�����ʾ��Ϣ
~~~
arcpy.AddMessage("================")
~~~
##������ͼ��
~~~
InPath="d:\temp"
fileName = "a.shp"
arcpy.CreateFeatureclass_management(InPath, fileName, "POLYGON")
~~~
##����ֶ�
~~~
#������ı���
def AddField(dataset,name,t,l):
    if len(arcpy.ListFields(dataset,name))<1:
        if t=="TEXT":
            arcpy.AddField_management(dataset, name, t, field_length=l)
        else:
            arcpy.AddField_management(dataset, name, t)
    return 
	
    newFile = "d:\\a.shp"
	AddField(newFile, "XZQDM", "TEXT", 6)#text����
	AddField(newFile, "TBMJ", "DOUBLE", 0)#double����
~~~
##���Ҫ��
~~~
newFile = "d:\\a.shp"
cursor = arcpy.da.InsertCursor(newFile, ["XZQDM","SHAPE@"])
firstPart = arcpy.Array([arcpy.Point(5997624.6225, 2069868.8208),
                         arcpy.Point(5997674.94199, 2069833.81741),
                         arcpy.Point(5997674.94199, 2069868.8208),
						 arcpy.Point(5997624.6225, 2069868.8208)])
secondPart = arcpy.Array([arcpy.Point(5997616.44497, 2069862.32774),
                          arcpy.Point(5997616.44497, 2069824.67456),
						  arcpy.Point(5997670.57373, 2069824.67456),
						  arcpy.Point(5997616.44497, 2069862.32774)])

array = arcpy.Array([firstPart, secondPart])
polygon = arcpy.Polygon(array)
XZQDM = "dddd"
cursor.insertRow((XZQDM,polygon))
~~~
##������Ҫ���������Ҫ��ͼ������ȡҪ�أ�����������Ҫ����ȡ���µ�Ҫ������
~~~
import arcpy
from arcpy import env

env.workspace = "C:/data"
arcpy.Select_analysis("C:/data/majorrds.shp", "C:/output/majorrdsClass4.shp", '"CLASS" = \'4\'')
~~~
##Ҫ���޸�
~~~
import arcpy
arcpy.env.workspace = 'c:/data/output.gdb'
fc = 'c:/data/base.gdb/roads'
fields = ['ROAD_TYPE', 'BUFFER_DISTANCE']

# Create update cursor for feature class 
with arcpy.da.UpdateCursor(fc, fields) as cursor:
    # Update the field used in Buffer so the distance is based on road 
    # type. Road type is either 1, 2, 3 or 4. Distance is in meters. 
    for row in cursor:
        # Update the BUFFER_DISTANCE field to be 100 times the 
        # ROAD_TYPE field.
        row[1] = row[0] * 100
        cursor.updateRow(row) 
~~~
##����λ�ú�����ѡ��ͼ��
~~~
# Name: ExtactFeaturesByLocationAndAttribute.py
# Description: Extract features to a new feature class based on a spatial relationships to another layer AND an attribute query
 
# Import system modules
import arcpy

# Set the workspace
env.workspace = "c:/data/mexico.gdb"

# Make a layer from the feature class
arcpy.MakeFeatureLayer_management("cities", "lyr") 
 
# Select all cities which overlap the chihuahua polygon
arcpy.SelectLayerByLocation_management("lyr", "intersect", "chihuahua", 0, "new_selection")

# Within selected features, further select only those cities which have a population > 10,000   
arcpy.SelectLayerByAttribute_management("lyr", "SUBSET_SELECTION", ' "population" > 10000 ')
 
# Write the selected features to a new featureclass
arcpy.CopyFeatures_management("lyr", "chihuahua_10000plus")

~~~

##Ҫ��ת��
~~~
import arcpy 
from arcpy import env 
env.workspace = "C:/data" 
arcpy.FeatureToPoint_management("parcels.shp", "c:/data/output/parcels_center.shp","CENTROID")
~~~
##��ȡsqlit���ݿ�
~~~
import sqlite3
    dbCursor = None
    try:
        db = sqlite3.connect(InDB)
        dbCursor = db.cursor()
        dbCursor.execute("SELECT XZQDM,XMC,TBBH,TBMC,TBMJ,XZB,YZB,BZ,TBFW FROM TBJBXX")
        newFile = ""
        
        for row in dbCursor:
            XZQDM = row[0]
			XMC = row[1]
                        
    except Exception as err:
        arcpy.AddError(err)
        s = sys.exc_info()
        arcpy.AddError("Error '%s' happened on line %d"%(s[1],s[2].tb_lineno))
        
    finally:
        if dbCursor:
            dbCursor.close()

~~~

    

